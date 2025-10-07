# Next-js-app-minikube
dockerized the nextjs app using multidocker and deployed on minikube 


This project demonstrates containerization and deployment of a Next.js application using Docker, automated CI/CD with GitHub Actions, and deployment to a local Kubernetes cluster (Minikube).

⚙️ 1. Containerization with Docker

Created a Dockerfile using a multi-stage build approach for smaller image size.

Installed dependencies, built the app, and used an optimized production image.

Verified the image locally using docker build and docker run.

🤖 2. CI/CD Automation with GitHub Actions

Configured a GitHub Actions workflow to automatically:

Build the Docker image on every push to the main branch.

Tag the image using commit SHA or version tag.

Push the image to GitHub Container Registry (GHCR).

Added authentication to GHCR using GitHub secrets (GHCR_TOKEN and USERNAME).

☸️ 3. Kubernetes Deployment on Minikube

Created a k8s/ folder containing:

deployment.yaml → defines pods, replicas, and health probes.

service.yaml → exposes the app internally or externally.

Applied manifests using:

kubectl apply -f k8s/


Verified deployment and service status using:

kubectl get pods,svc

🧪 4. Local Testing with Minikube

Started Minikube and configured Docker environment.

Deployed the application and obtained the service URL using:

minikube service <service-name>


Accessed the running app in a browser via the generated URL.

📄 5. Documentation & Repository Structure

The repository includes:

Dockerfile → for containerization

.github/workflows/ → for CI/CD

k8s/ → for deployment manifests

README.md → for setup and usage documentation

🧭 6. How to Run Locally

Clone the repository

Build and run the Docker container locally

Or, deploy on Minikube using provided Kubernetes manifests

🧰 Tools & Technologies

Frontend: Next.js

Containerization: Docker

CI/CD: GitHub Actions + GHCR

Orchestration: Kubernetes (Minikube)
