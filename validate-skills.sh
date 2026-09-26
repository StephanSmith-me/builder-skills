#!/bin/bash
# Check skills against the Agent Skills spec. See AGENTS.md.

set -u

cd "$(dirname "$0")"
SKILLS_DIR="skills"
ISSUES=0

echo "Auditing skills"
echo "Spec: https://agentskills.io/specification.md"
echo

for skill_dir in "$SKILLS_DIR"/*/; do
  skill_name=$(basename "$skill_dir")
  skill_file="$skill_dir/SKILL.md"
  errors=()

  if [[ ! -f "$skill_file" ]]; then
    echo "FAIL  $skill_name — missing SKILL.md"
    ISSUES=$((ISSUES + 1))
    continue
  fi

  name=$(awk '/^---$/{n++; next} n==1 && /^name:/{sub(/^name:[[:space:]]*/, ""); print; exit}' "$skill_file")
  description=$(awk '/^---$/{n++; next} n==1 && /^description:/{sub(/^description:[[:space:]]*/, ""); print; exit}' "$skill_file")
  lines=$(wc -l < "$skill_file" | tr -d ' ')

  if [[ -z "$name" ]]; then
    errors+=("missing name")
  elif [[ "$name" != "$skill_name" ]]; then
    errors+=("name '$name' does not match directory '$skill_name'")
  elif [[ ! "$name" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]] || [[ ${#name} -gt 64 ]]; then
    errors+=("name must be lowercase, hyphenated, 1-64 chars, no leading or trailing hyphen")
  fi

  if [[ -z "$description" ]]; then
    errors+=("missing description")
  elif [[ ${#description} -gt 1024 ]]; then
    errors+=("description is ${#description} chars (max 1024)")
  fi

  if [[ "$lines" -gt 500 ]]; then
    errors+=("SKILL.md is $lines lines (max 500)")
  fi

  if [[ ${#errors[@]} -eq 0 ]]; then
    echo "ok    $skill_name"
  else
    echo "FAIL  $skill_name"
    for err in "${errors[@]}"; do
      echo "      $err"
    done
    ISSUES=$((ISSUES + 1))
  fi
done

echo
if [[ "$ISSUES" -eq 0 ]]; then
  echo "All skills passed."
  exit 0
fi

echo "$ISSUES skill(s) failed."
exit 1
