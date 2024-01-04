#!/bin/bash

# Change this path to the desired directory
target_directory="instgram-unban"

# Check if the directory exists
if [ -d "$instagram-unban" ]; then
    # Change the current working directory
    cd "instagram-unban"
    echo "Changed to directory: $instagram-unban"
else
    echo "Error: Directory does not exist - $instagram-unban"
fi
