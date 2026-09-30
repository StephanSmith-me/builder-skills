# What to check

The report is in `SKILL.md`. Two findings. Do not add SPF, DKIM, or another record to the check.

## Cloudflare DNS

Only domains whose DNS is on Cloudflare. A domain registered somewhere else, with DNS somewhere else, is out of this scan. Say so. Do not look up a registrar you were not shown.

## ImprovMX

Email settings that point the domain at ImprovMX. An MX record is the sign. A domain with no mail records has no ImprovMX setup. That is not a broken forwarder.

## DMARC

A DMARC record on the domain. Missing means it is absent, not that you should draft the value. Present means you name the domain and say it is there. Do not paste a new record.

Missing DMARC matters when the domain sends or forwards mail, including through ImprovMX. That is the delivery issue. A parked domain with no mail does not get a DMARC task.

## Also notice

- Do not change DNS until the user says to.
- Whether they should use ImprovMX at all is the `improvmx` skill.
