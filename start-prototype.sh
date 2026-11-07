#!/bin/bash
echo "========================================================"
echo "  RoomieSplit - Hi-Fi Usability Testing Prototype"
echo "========================================================"
echo ""

if ! command -v node &> /dev/null
then
    echo "[ERROR] Node.js is not installed!"
    echo "Please download and install Node.js from https://nodejs.org/"
    exit 1
fi

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

echo "Starting prototype at http://localhost:5173..."
npm run dev -- --open --host
