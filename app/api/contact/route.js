import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const leadsFile = path.join(process.cwd(), 'data', 'leads.json');

async function readLeads() {
  try {
    const raw = await fs.readFile(leadsFile, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, company } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    if (!emailOk) {
      return NextResponse.json({ ok: false, error: 'invalid email' }, { status: 400 });
    }

    const lead = {
      id: Date.now().toString(36),
      name: String(name).trim().slice(0, 120),
      email: String(email).trim().slice(0, 160),
      company: company ? String(company).trim().slice(0, 160) : '',
      message: String(message).trim().slice(0, 2000),
      createdAt: new Date().toISOString(),
    };

    const leads = await readLeads();
    leads.push(lead);
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2), 'utf8');

    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not send message' }, { status: 500 });
  }
}
