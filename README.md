# Web Developer Task: NodeJS File System

## Overview

This project provides two API endpoints to manage text files in a specific folder. The first endpoint creates a text file with the current timestamp, and the second endpoint retrieves a list of all text files in that folder.

## Endpoints

### 1. Create a Text File

- **Endpoint**: `/create`
- **Method**: `POST`
- **Description**: Creates a text file in the `files` folder with the current timestamp as its content. The filename is the current date-time.
- **Response**:
  - `200`: File created successfully
  - `500`: Error creating file

### 2. Retrieve All Text Files

- **Endpoint**: `/read`
- **Method**: `GET`
- **Description**: Retrieves a list of all text files in the `files` folder.
- **Response**:
  - `200`: Success, returns a list of files
  - `500`: Error reading directory


