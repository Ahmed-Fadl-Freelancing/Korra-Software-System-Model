# Project Brief: HVAC Workflow Platform (Handoff to Lovable)

**Architecture:** Next.js (Frontend) + Django (Backend) + Supabase (Data/Storage) + UiPath (RPA - later)  
**Goal:** Internal workflow platform for Sales ↔ Technical Office automation with DW/Power BI-ready data from day one.

---

## Repositories

### Repo A — Frontend: Next.js
**Purpose:** UI for Sales, Engineers, and Managers

**Pages/Features:**
- Task Inbox (workflow tasks by role)
- Opportunity Create (upload PDFs, paste email text, contractor/project metadata)
- Opportunity Detail (timeline, documents, extracted fields, model shortlist, final selection)
- Engineer Workbench (verify extraction, select final model)
- Offer Viewer (download generated offer, mark as sent)
- Manager Dashboard (aggregates via Edge Functions)

**API Layer:** Client to consume Django DRF endpoints

**Auth:** Placeholder UI (actual auth handled by Django)

---

### Repo B — Backend: Django (+ Django REST Framework)

**Purpose:** Workflow engine, permissions, audit trail, orchestration

**Apps/Modules:**
| App | Responsibility |
|-----|---------------|
| `accounts` | Users, roles, departments |
| `opportunities` | Core opportunity entity |
| `documents` | PDF metadata + Supabase Storage links |
| `workflow` | Tasks, statuses, SLA tracking, audit logs |
| `extraction` | Normalized extracted fields + confidence scores + verification flags |
| `catalog` | Product taxonomy, model database |
| `pricing` | Pricing logic (Excel migration), offer generation hooks |
| `rpa` | UiPath job tracking, webhook handlers (stub for now) |
| `analytics` | Read-only endpoints for dashboard data |

**Integrations:**
- Supabase Postgres (primary database)
- Supabase Storage (signed URLs for PDFs)
- UiPath webhook endpoint (future)

---

## Platform Services (Supabase)

| Service | Usage |
|---------|-------|
| **Postgres** | System of record, DW-ready schema |
| **Storage** | PDFs (input) + generated Offer PDFs |
| **Edge Functions** | Read-only heavy aggregates for Manager Dashboard (optional optimization) |
| **Auth** | **Not used** — handled by Django for single security gate |

---

## High-Level Workflow

1. **Sales** receives inquiry email with PDFs
2. **Sales** creates Opportunity → uploads PDFs + metadata
3. **System** stores files, extracts parameters (human-verified initially)
4. **Tech Engineer** receives task → runs model shortlist (later: UiPath) → selects final model
5. **System** calculates pricing → generates Offer PDF
6. **Sales** receives in inbox → sends to client
7. **Later:** Record outcome (Awarded/Lost, reasons, competitor, margins) for analysis

---

## Critical: DW/Power BI Ready Data

**Design principles enforced from day 1:**

- **Stable IDs:** `opportunity_id`, `document_id`, `task_id`, `model_id`, `offer_id`, `user_id`
- **History tables:** Never overwrite lifecycle data (status changes, assignments, offer versions)
- **Timestamps everywhere:** `created_at`, `updated_at`, `stage_entered_at`, `stage_exited_at`
- **Append-only** audit/event tables; soft-delete for business records
- **Raw + Normalized:** Store extracted JSON optionally, but always normalized fields for reporting

**Dimensional Model (target):**
- **Dimensions:** `dim_user`, `dim_department`, `dim_customer`, `dim_product_category`, `dim_opportunity`
- **Facts:** `fact_opportunity_events`, `fact_tasks`, `fact_offers`, `fact_outcomes`, `fact_uipath_runs`

**Required Outcome Fields:**
`offered_flag`, `awarded_flag`, `lost_reason`, `lost_notes`, `competitor`, `final_value`, `margins`, `key_dates`

**Power BI Approach:** Connect to Postgres read replica or DW schema (star schema with views/materialized views)

---

## Component Communication

---

**Next.js UI → Django API (all business actions)**

**↓↓**

**Django → Supabase Postgres (data) + Supabase Storage (files)**

**↓↓**

**Edge Functions → Supabase Postgres (read-only aggregates)**

**↓↓**

**UiPath (later) → Django webhook → DB update → new tasks**

---

## What Lovable Should Generate Now

### Repo A (Next.js)
- [ ] Auth UI placeholder
- [ ] Task Inbox page
- [ ] Opportunity Create (upload + metadata)
- [ ] Opportunity Detail (timeline, docs, extraction, model selection)
- [ ] Engineer Workbench (verification UI)
- [ ] Offer Viewer (download + status)
- [ ] Manager Dashboard (aggregate display)
- [ ] API client layer (Django endpoints)

### Repo B (Django)
- [ ] Project structure with apps listed above
- [ ] DRF serializers + ViewSets for core entities
- [ ] Workflow state machine (status transitions)
- [ ] Supabase integration (Postgres config + Storage helpers)
- [ ] Webhook stub for UiPath callbacks
- [ ] Audit logging middleware
- [ ] Analytics read-only endpoints

---

## Inputs Pending

- [ ] Supabase credentials (DB connection + Storage bucket/keys)
- [ ] UiPath Orchestrator details (later)
- [ ] Sample PDFs + existing Excel templates (extraction reference + pricing parity)

---

## Success Criteria (V1)

- [ ] Workflow runs end-to-end without Excel
- [ ] Full audit trail on every opportunity
- [ ] Data structure supports DW modeling without migration
- [ ] Ready for UiPath integration (webhook contract defined)
- [ ] Power BI can connect and build basic reports