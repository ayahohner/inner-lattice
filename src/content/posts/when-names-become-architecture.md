---
title: "Separate requirements from implementations"
description: "Keep requirements clear when tools, teams, and procedures change. Use defined roles, shared references, and explicit assignments."
date: 2026-08-04T12:00:00-04:00
tags: ["ontology", "systems-thinking", "agents", "knowledge-management", "software-engineering"]
---

When a business writes a policy around the software it uses today, changing the software becomes harder than it needs to be. Staff must revise the policy as well as replace the software. If other teams have copied the product name into their procedures, those procedures need updating too.

The same problem occurs when instructions name a particular department or employee. A reorganization can make the instructions obsolete even though the work has not changed.

The product name is useful when someone needs to operate the product. The trouble starts when people use that name to describe the requirement. “Store the decision in the project knowledge base” describes a responsibility. “Store the decision in Notion” selects a product.

Engineers call such a dependency *coupling*: changing one part requires changes elsewhere. Repeated names can reveal coupling, but replacing every product name with a generic term will not remove the dependency. The organization also needs to specify what the replacement must do and record where the current product is used.

Several disciplines offer methods for making those decisions:

| Discipline | Method | What the method separates |
| --- | --- | --- |
| [Jobs to Be Done](https://www.christenseninstitute.org/theory/jobs-to-be-done/) | Study the progress people seek in particular circumstances | A person's need from the product they currently use |
| [Business architecture](https://publications.opengroup.org/g211) | Describe business capabilities, meaning the abilities an organization needs | Required work from the departments and systems that perform the work |
| [Systems engineering](https://www.nasa.gov/reference/4-0-system-design-processes/) | Define functions and performance before selecting a design | Requirements from the means of meeting them |
| [Software architecture](https://alistair.cockburn.us/hexagonal-architecture) | Define interfaces and isolate implementation details | What a component must provide from how the component works |
| [Information management](https://www.w3.org/TR/skos-reference/) | Use stable identifiers and maintain preferred and alternative labels | The identity and definition of a subject from its current name |

These methods support a common practice: define the required work, assign responsibility for performing it, and keep that assignment explicit.

## Describe the work and the conditions for success

Start with the result someone needs. For example, an employee needs a decision on an expense claim. The organization might require a decision within five working days and a record of who approved it.

The desired result is an *outcome*. The deadline and approval record are *requirements*: conditions that the organization can check. Jobs to Be Done helps investigate the desired result and the circumstances behind it. Requirements work turns that understanding into conditions for an acceptable solution.

In pseudocode, the rule could read `decide(claim, within = 5 working days)`. Pseudocode describes a rule without using the exact syntax of a programming language. The rule specifies the work and deadline while leaving the choice of approval software open.

A requirement can be precise without specifying a product. Procurement uses *performance specifications* for this purpose: describe the function and acceptable performance so suppliers can propose ways to meet the need. The [Federal Acquisition Regulation](https://www.acquisition.gov/far/subpart-11.1) expressly prefers performance specifications and requires justification for certain brand restrictions.

Keep a product name in the requirement when the product is a necessary constraint. A requirement to exchange files with a customer's existing system may need to specify that system's format. Record the reason for the restriction so a later team can assess whether the restriction still applies.

## Define the role, then assign the provider

The expense procedure needs an approver with the authority to make the decision. The procedure can state `send(claim, to = expense_approver)`. A separate assignment records `expense_approver = finance_operations`.

In systems engineering, assigning a function to the part that performs it is called *allocation*. Separating the role from its assignment lets the organization change the responsible team without rewriting the approval requirement.

The role needs a definition. For an expense approver, the definition should state the approver's authority and expected response. Otherwise, “expense approver” is only a less specific name.

Software interfaces serve a similar purpose. An *interface* defines how components interact and what each component can expect. [Information hiding](https://doi.org/10.1145/361598.361623) keeps decisions likely to change inside the component responsible for them. In an organization, the corresponding practice is to keep team assignments in an authoritative responsibility record and refer to that record from general procedures.

Staff still need concrete instructions. The current operating procedure should identify the actual team and explain how to submit a claim. A general policy should not require staff to discover those details for themselves.

## Maintain shared definitions and assignments

Give a frequently referenced role a stable identifier and a clear definition. Treat its display name as a separate value. For example, `role["R17"].name = "Expense approver"` allows the label to change while references to `R17` remain valid.

The [W3C SKOS standard](https://www.w3.org/TR/skos-reference/) separates concept identifiers from preferred and alternative labels. That distinction is useful when different teams use different names for the same concept.

Renaming a role and replacing its provider are different changes. A new provider should have its own record. Update the assignment, such as `provider["R17"] = new_team`, rather than changing an old team's record to mean a different team.

Keep shared assignments in a maintained source with a responsible owner. Link to that source or reuse its content when producing instructions. Copying the assignment into several independently edited documents creates several opportunities for the documents to disagree.

A shared source can still contain the wrong requirement. Centralizing a rule that unnecessarily requires one product makes the rule consistent, but keeps the product dependency.

## Check what depends on the assignment

*Traceability* means recording links between related requirements and implementations. For the expense process, those links should identify the approval requirement, the responsible team, and the procedure employees follow.

Before changing the approver, a query such as `find_references("R17")` can identify procedures that need review. The review must check whether the new team has the required authority and can meet the deadline. Updating the team name alone is insufficient.

*Configuration management* controls the approved arrangement and records changes to it. [ISO 10007](https://www.iso.org/standard/70400.html) provides guidance for applying configuration management to products and services. For an organizational process, keep the approved assignment and its effective date. An old claim must still show which team approved it at the time.

Use these controls where changes affect several consumers. A small project may need only a linked responsibility record. A larger organization may need managed identifiers and automated reference checks. The amount of administration should reflect the number of dependencies and the consequences of an incorrect change.
