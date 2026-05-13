import fs from "fs";
import path from "path";
import { Lead } from "./types";

const DATA_FILE = path.join(process.cwd(), "data", "leads.json");

function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
}

export function getLeads(): Lead[] {
  ensureDataDir();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw) as Lead[];
}

export function saveLead(lead: Lead): void {
  const leads = getLeads();
  const existing = leads.findIndex((l) => l.id === lead.id);
  if (existing >= 0) {
    leads[existing] = lead;
  } else {
    leads.push(lead);
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2));
}

export function deleteLead(id: string): void {
  const leads = getLeads().filter((l) => l.id !== id);
  fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2));
}

export function updateLeadStatus(id: string, status: Lead["status"]): Lead | null {
  const leads = getLeads();
  const lead = leads.find((l) => l.id === id);
  if (!lead) return null;
  lead.status = status;
  lead.updatedAt = new Date().toISOString();
  fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2));
  return lead;
}
