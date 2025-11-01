#!/bin/bash

echo "🧹 Cleaning old allure files..."
rm -rf allure-results/*
rm -rf allure-report/*

echo "🧹 Cleaning temp chrome folders..."
rm -rf /tmp/chrome
rm -rf /tmp/chrome-* 

echo "✅ Cleanup completed."
