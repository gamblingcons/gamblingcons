import { NextRequest, NextResponse } from "next/server";
import { getLeads, saveLead, deleteLead } from "@/lib/storage";
import { Lead } from "@/lib/types";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = getLeads().find((l) => l.id === id);
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(lead);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const leads = getLeads();
  const lead = leads.find((l) => l.id === id);
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const body: Partial<Lead> = await req.json();
  const updated: Lead = {
    ...lead,
    ...body,
    id: lead.id,
    updatedAt: new Date().toISOString(),
  };
  saveLead(updated);
  return NextResponse.json(updated);
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  deleteLead(id);
  return NextResponse.json({ ok: true });
}
