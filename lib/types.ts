export type LeadStatus =
  | "prospecto"
  | "contactado"
  | "reunion"
  | "propuesta"
  | "cliente"
  | "perdido";

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  country: string;
  service: string;
  status: LeadStatus;
  value?: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LeadFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  country: string;
  service: string;
  message?: string;
}

export const LEAD_STATUSES: { value: LeadStatus; label: string; color: string }[] = [
  { value: "prospecto", label: "Prospecto", color: "bg-slate-100 text-slate-700" },
  { value: "contactado", label: "Contactado", color: "bg-blue-100 text-blue-700" },
  { value: "reunion", label: "Reunión", color: "bg-yellow-100 text-yellow-700" },
  { value: "propuesta", label: "Propuesta", color: "bg-purple-100 text-purple-700" },
  { value: "cliente", label: "Cliente", color: "bg-green-100 text-green-700" },
  { value: "perdido", label: "Perdido", color: "bg-red-100 text-red-700" },
];

export const SERVICES = [
  "Consultoría Regulatoria",
  "Obtención de Licencias",
  "Entrada a Nuevos Mercados",
  "Compliance & AML",
  "Estrategia de Afiliados",
  "Due Diligence",
  "Asesoría Legal",
  "Otro",
];
