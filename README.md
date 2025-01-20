# **Cloudonix Test**

This project is a web application built with **Angular 15** and **Node.js v20**. The app is designed to showcase dynamic components and a responsive UI while interacting with an external API. It is deployed on **Vercel** and accessible at: [https://cloudonix-test.vercel.app/](https://cloudonix-test.vercel.app/).

---

## **Features**

- **Responsive UI**: Built with Angular Material.
- **State Management**: Reactive programming with RxJS.
- **Live Deployment**: Hosted on **Vercel**.
- **Error Handling**: Includes interceptors for API requests.

---

## **Prerequisites**

Ensure you have the following installed:

- **Node.js**: Version 20 or later ([Download Node.js](https://nodejs.org/))
- **Angular CLI**: Version 15. Run `npm install -g @angular/cli` to install.
- **Browser Configuration**:
  - The external API (`http://rest-items.research.cloudonix.io`) is served over HTTP. If accessing the app on Vercel (HTTPS), you must allow insecure content in your browser settings.

---

## **Installation and Setup**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository/cloudonix-test.git
   cd cloudonix-test
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   ng serve
   ```
   Navigate to [http://localhost:4200](http://localhost:4200) in your browser.

---

## **Building the Application**

To create a production build:

```bash
npm run
```

The build artifacts will be located in the `dist/cloudonix-test` directory.

---

## **Accessing the Application on Vercel**

Due to the HTTP API endpoint, follow these steps to allow insecure content:

1. Open your browser's settings.
2. Navigate to **Site Settings** > **Insecure Content**.
3. Allow insecure content for `https://cloudonix-test.vercel.app`.

---

## **API Configuration**

The application interacts with the following API:

- **Base URL**: `http://rest-items.research.cloudonix.io`
- **Endpoints**: `/items`

Ensure the API is accessible from your network.

---

## **Further Help**

For more information on Angular CLI, refer to the [Angular CLI Documentation](https://angular.io/cli).
