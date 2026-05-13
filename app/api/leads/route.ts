import { NextRequest, NextResponse } from "next/server";
import { getLeads, saveLead } from "@/lib/storage";
import { Lead, LeadFormData } from "@/lib/types";
import { randomUUID } from "crypto";

export async function GET() {
  const leads = getLeads();
  return NextResponse.json(leads);
}

export async function POST(req: NextRequest) {
  const body: LeadFormData = await req.json();

  if (!body.name || !body.email || !body.company || !body.country || !body.service) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  const lead: Lead = {
    id: randomUUID(),
    name: body.name,
    company: body.company,
    email: body.email,
    phone: body.phone,
    country: body.country,
    service: body.service,
    status: "prospecto",
    notes: body.message,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  saveLead(lead);
  return NextResponse.json(lead, { status: 201 });
}
