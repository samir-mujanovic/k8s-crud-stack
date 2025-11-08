# 🧱 k8s-crud-stack

A full-stack CRUD application deployed in Kubernetes, featuring a Node.js backend, Nginx frontend, and PostgreSQL database — all wired together with clean configs, persistent storage, and secure environment management. **Fully automated with ArgoCD GitOps workflows.**

---

## 🚀 Stack Overview

| Layer           | Tech                     | Purpose                          |
|-----------------|--------------------------|----------------------------------|
| Frontend        | Nginx + static HTML/CSS/JS | Serves the UI and routes SPA requests |
| Backend         | Node.js + Express        | Handles CRUD API logic           |
| Database        | PostgreSQL               | Stores persistent data           |
| Orchestration   | Kubernetes (Minikube)    | Manages containers, networking, and scaling |
| GitOps          | ArgoCD                   | Automated deployments and sync   |
| Ingress         | Nginx Ingress Controller | External access and routing      |

---

## 📦 Features

- ✅ Containerized frontend, backend, and database
- 🔄 Clean service discovery via internal DNS
- 🔐 Secrets and ConfigMaps for secure env management
- 📊 Resource requests and limits for all pods
- 💾 Persistent volume for PostgreSQL
- 📈 Metrics via metrics-server (`kubectl top`)
- 🧪 Ready for probes, autoscaling, and ingress
- 🔄 **GitOps with ArgoCD** - Automated sync and deployment
- 🌐 **Ingress Configuration** - External access via domain names
- 🔒 **RBAC Security** - Fine-grained permissions for services

---

## 🗂️ Project Structure
