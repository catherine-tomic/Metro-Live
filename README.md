# Metro-Live

A fully serverless, secure, and scalable web application that displays real-time Washington DC Metro (WMATA) data. Built using AWS services and deployed with CI/CD automation.

## Live Demo
https://metrolive.ctomic.com

**Status:** Live and actively in development
The core AWS infrastructure is complete and the site is hosted securely. Frontend feature and styling are still being developed.

## Project Goal
The primary goal of this project is to design and deploy a fully serverless, secure, and scalable web application using AWS services. The frontend is intentionally minimal and not all functionality is fully implemented yet, to allow focus on infrastructure, security, and CI/CD automation using AWS and GitHub Actions.

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js (AWS Lambda), WMATA API
- **Cloud Services:**
  - Amazon S3 (static site hosting)
  - AWS CloudFront (HTTPS + CDN)
  - Route 53 (Custom domain)
  - AWS WAF (Security filtering)
  - API Gateway (Routing to Lambda)
  - AWS Lambda (Serverless backend logic)
  - AWS Secrets Manager (Secure API key storage)
- **CI/CD:** GitHub Actions (Deploy to S3 & CloudFront cache invalidation)

## Features
- Real-time metro data pulled from the **WMATA API**
- Secure and optimized static hosting using **Amazon S3** and **CloudFront**
- Custom domain secured with **HTTPS** using **Route 53** and SSL certificate
- Automatic redirection from HTTP to HTTPS for secure access
- Serverless backend powered by **API Gateway & Lambda**
- Secrets stored securely with **AWS Secrets Manager**
- Protection against common web exploits with **AWS WAF**
- Seamless deployment with **GitHub Actions** CI/CD pipeline
- Optimized deployment by ignoring unnecessary files during sync to reduce upload time and storage usage

## Folder Structure
```
metro-live/
|--- deploy/
|    |--- index.html
|    |--- style.css
|    |--- script.js
|--- .github/workflows/
|    |--- deploy.yml
|--- README.md
```
