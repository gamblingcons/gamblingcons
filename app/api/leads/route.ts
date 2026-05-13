import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Lead, LeadFormData } from "@/lib/types";
import { randomUUID } from "crypto";

export async function GET() {
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body: LeadFormData = await req.json();

  if (!body.name || !body.email || !body.company || !body.country || !body.service) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  const lead = {
    id: randomUUID(),
    name: body.name,
    company: body.company,
    email: body.email,
    phone: body.phone ?? null,
    country: body.country,
    service: body.service,
    status: "prospecto",
    notes: body.message ?? null,
    value: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase.from("leads").insert(lead).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(mapLead(data), { status: 201 });
}

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
