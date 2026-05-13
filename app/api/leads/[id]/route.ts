import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Lead } from "@/lib/types";

function mapLead(row: Record<string, unknown>): Lead {
  return {
    id: row.id as string,
    name: row.name as string,
    company: row.company as string,
    email: row.email as string,
    phone: row.phone as string | undefined,
    country: row.country as string,
    service: row.service as string,
    status: row.status as Lead["status"],
    value: row.value as number | undefined,
    notes: row.notes as string | undefined,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  };
}

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data, error } = await supabase.from("leads").select("*").eq("id", id).single();
  if (error) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(mapLead(data));
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();

  const update: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (body.name !== undefined) update.name = body.name;
  if (body.company !== undefined) update.company = body.company;
  if (body.email !== undefined) update.email = body.email;
  if (body.phone !== undefined) update.phone = body.phone;
  if (body.country !== undefined) update.country = body.country;
  if (body.service !== undefined) update.service = body.service;
  if (body.status !== undefined) update.status = body.status;
  if (body.value !== undefined) update.value = body.value;
  if (body.notes !== undefined) update.notes = body.notes;

  const { data, error } = await supabase
    .from("leads")
    .update(update)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(mapLead(data));
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { error } = await supabase.from("leads").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
