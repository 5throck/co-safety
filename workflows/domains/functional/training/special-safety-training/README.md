# Workflow: Special Safety Training (특별안전보건교육)

## 1. Overview

This workflow guides the planning, delivery tracking, and evidence recording of special safety and health education (특별안전보건교육) for workers engaged in hazardous work. It applies to all industries supported by this workflow profile: chemical, gas_terminal, power_generation, construction, medical_device, pharma, and manufacturing. The workflow produces a structured training record that satisfies 산업안전보건법 Articles 31 and 29 requirements and supports employer obligations under 중대재해처벌법 Article 7.

## 2. Legal Basis (legal_basis)

Citations below are verbatim-aligned with this workflow's `schema.yaml` `legal_basis` array (same articles, same order).

**Primary legal_basis: 산업안전보건법 Article 31**

- **산업안전보건법 Article 31** — Special safety and health training for hazardous work (특별안전보건교육 위험작업): employers must provide special education to workers performing hazardous or dangerous work.
- **중대재해처벌법 Article 7** — Dual liability for serious industrial accidents — corporate penalty (중대산업재해의 양벌규정): failure to deliver mandated special education exposes the business owner and the corporation to serious-accident liability.
- **산업안전보건법 Article 29** — Worker safety and health education (근로자 안전보건교육): the general education baseline that special education supplements for hazardous-work assignments.

## 3. Trigger Conditions

- Worker assigned to a new hazardous work category requiring special education
- Hazardous task assignment identified during gap analysis (`training-record.json` missing Article 31 completion)
- New equipment, process, or chemical introduction creating a hazardous work profile
- Safety Workflow Manager dispatches a training-plan update
- Escalation from any audit finding of missing special education records

## 4. Agent Assignments

| Step | Agent | Role |
|------|-------|------|
| Scope definition | safety-workflow-manager | Initiates workflow, gathers hazardous-work roster and context |
| Gap analysis | training-agent | Compares completion status against OSHA-KR Article 31/29 requirements |
| Curriculum generation | training-agent | Dynamically generates tailored curricula by role and hazard |
| Record sync | training-agent | Prepares updated training plans for dispatch |
| Documentation | safety-workflow-manager | Record creation and filing |

## 5. Steps

1. **Scope Definition** — safety-workflow-manager confirms the target worker population engaged in hazardous work, the applicable industries, and the reporting period. Assigns the training-agent to lead the compliance check.

2. **Gap Analysis** — training-agent reads existing `training-record.json` files and compares `completion_date`, `hours_completed` vs `required_hours`, and `next_training_due` fields against 산업안전보건법 Articles 31 and 29 requirements, validating every record's `legal_basis` array against `regulations/KR/legal-glossary.yaml`. Workers without current special education for their hazardous work are flagged as gaps.

3. **Curriculum Generation** — For flagged workers, training-agent dynamically generates tailored special safety and health education curricula based on each worker's role and the specific hazards of the assigned work.

4. **Record Sync** — training-agent prepares updated training plans and requirements for dispatch to the Safety Workflow Manager.

5. **Documentation** — safety-workflow-manager creates the structured JSON evidence record per `evidence-models/domains/functional/training/training-record.json`, with a human-readable summary in `memory/training/`, and routes it for acknowledgment.

**Escalation**: If a worker is identified as operating without the mandated safety training (Article 29/31 violation), escalate immediately to PM (CSO) and Safety Workflow Manager. If a training evidence record fails schema validation or its `legal_basis` cannot be resolved against `regulations/KR/legal-glossary.yaml`, escalate as broken traceability.

## 6. Evidence Requirements

The following records must be created and retained to satisfy audit requirements:

- Structured JSON evidence record conforming to `evidence-models/domains/functional/training/training-record.json` (primary audit artifact)
- Every record's `legal_basis` field populated with the citations listed in Section 2 above
- Completion data fields filled: `completion_date`, `hours_completed` vs `required_hours`, `next_training_due`
- Human-readable summary in `memory/training/`
- Validation of the record's `legal_basis` array against `regulations/KR/legal-glossary.yaml`

## 7. Completion Criteria

The workflow is complete when:

- All workers in scope have a current special safety and health education record under 산업안전보건법 Article 31
- All gaps identified in step 2 have been closed with generated curricula dispatched via step 4
- The evidence record is saved as structured JSON per `training-record.json` schema with `legal_basis` populated
- Any training violation (worker operating without mandated special education) has been escalated to PM (CSO) and Safety Workflow Manager
