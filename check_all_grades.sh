#!/bin/bash
# Check all PDF links from bilimmarkazi.uz
echo "Checking all grades..."

for grade in {1..11}; do
  echo "=== Grade $grade ==="
  curl -s "https://bilimmarkazi.uz/1-11-sinf-darsliklar/" | grep -i "${grade}-sinf" | grep -oE 'href="[^"]+"' | head -5
done
