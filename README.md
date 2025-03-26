# Google Cloud Firebase AutoDeploy WebMaster

An automated web deployment system leveraging Google Cloud Platform and Firebase for streamlined, efficient, and reliable web application deployments.

## Overview

Google Cloud Firebase AutoDeploy WebMaster automates the deployment of web applications using Firebase Hosting and Google Cloud Build, integrated with a CI/CD pipeline. It ensures that web applications are deployed quickly and reliably from a source code repository to Firebase Hosting, with minimal manual intervention.

### Key Features

- 🚀 Automated deployments triggered by code pushes
- 🔄 CI/CD pipeline with Google Cloud Build
- 🌐 Firebase Hosting with global CDN
- 📊 Built-in monitoring and rollback capabilities
- 🌍 Multiple environment support (dev, staging, prod)
- 🔒 Secure HTTPS by default
- 🔍 Performance monitoring and logging

## Prerequisites

- Node.js 16.x or later
- Firebase CLI (`npm install -g firebase-tools`)
- Google Cloud CLI
- Git
- GitHub account
- Firebase project
- Google Cloud project (can be same as Firebase project)

## Project Structure

```
├── src/                  # Source code files
│   ├── components/       # React components
│   ├── pages/           # Page components
│   └── App.js           # Main application component
├── public/              # Static files
├── firebase.json        # Firebase configuration
├── .firebaserc          # Firebase project settings
├── cloudbuild.yaml      # Cloud Build pipeline config
├── package.json         # Node.js dependencies
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd GoogleCloudFirebaseAutoDeployWebMaster
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   ```bash
   # Login to Firebase
   firebase login
   
   # Initialize Firebase project
   firebase init hosting
   
   # Set up project aliases
   firebase use --add
   ```

4. **Google Cloud Setup**
   ```bash
   # Install Google Cloud CLI
   # Configure Cloud Build trigger
   gcloud builds triggers create github \
     --repo-name=<repository-name> \
     --branch-pattern=^(main|staging)$ \
     --build-config=cloudbuild.yaml
   ```

## Deployment Workflow

### Development
```bash
# Run locally
npm start

# Deploy to development channel
firebase hosting:channel:deploy dev
```

### Staging
```bash
# Deploy to staging
git push origin staging
# Automatically triggers deployment to staging channel
```

### Production
```bash
# Deploy to production
git push origin main
# Automatically triggers deployment to production
```

## Monitoring

- View deployment status in Firebase Console
- Monitor performance in Google Cloud Console
- Check application logs in Cloud Logging
- Monitor Cloud Build pipeline status

## Rollback Procedure

If issues are detected in a deployment:

```bash
# List available versions
firebase hosting:versions:list

# Rollback to previous version
firebase hosting:rollback
```

## Environment Configuration

Configure environment-specific settings in Firebase Remote Config or `.env` files:

```
.env.development  # Development settings
.env.staging     # Staging settings
.env.production  # Production settings
```

## CI/CD Pipeline Stages

1. **Build**
   - Install dependencies
   - Build application
   - Generate static assets

2. **Test**
   - Run unit tests
   - Run integration tests
   - Perform linting

3. **Deploy**
   - Deploy to Firebase Hosting
   - Update configurations
   - Run smoke tests

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please [open an issue](https://github.com/yourusername/GoogleCloudFirebaseAutoDeployWebMaster/issues) on GitHub.