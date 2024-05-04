## Improved README with Backend Information

Based on your updated `package.json` for the backend, here's an enhanced version of your README:

**Project Name**


<img src="./src/assets/files/LogoWebsite.png" alt="Man Technologist Light Skin Tone" width="238" height="38" /> </b>


**Description**

This is an e-commerce website showcasing a virtual drift pilot and their products. It features a user-friendly interface with the following sections:

- **Home:** Introduces the virtual drift pilot and their expertise.
- **Explorer:** Allows navigation through product categories.
- **Videos:** Features video content related to the virtual drift pilot.
- **Recommendations:** Showcases recommended products.

The website also includes a dedicated store page with:

- Browsing by category using filters.
- Individual product details with images.
- Buttons redirecting users to affiliate links for purchasing products.

The footer provides links to the virtual drift pilot's affiliates.

**Technology Stack**

**Frontend:** Next.js (React framework)
- Additional Frontend Libraries:
    - @nextui-org/react (UI components)
    - axios (HTTP client)
    - framer-motion (animations)
    - react-icons (icons)
    - react-slick (carousel)
- Styling: Tailwind CSS
- Linting: ESLint
- Type checking: TypeScript

**Backend:** Node.js with Express
- Database: SQLite
- Additional Backend Libraries:
    - bcryptjs (password hashing)
    - cors (cross-origin resource sharing)
    - express-async-errors (error handling)
    - jsonwebtoken (JSON Web Tokens for authentication)
    - knex (SQL query builder)
    - multer (file upload handling)

**Setup Instructions**

**Frontend:**

1. **Prerequisites:**
    - Node.js and npm (or yarn) installed on your system.

2. **Clone Repository:** Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/Frankdias92/newProjetStore
   ```

3. **Install Dependencies:** Install the project's frontend dependencies:

   ```bash
   cd website-adriel999-store
   npm install  # or yarn install
   ```

**Backend <a href='https://github.com/Frankdias92/product-store-api/tree/main'>(separete repository)</a>:**



1. **Clone Backend Repository:** Clone the backend repository (if separate) to your local machine.

2. **Install Dependencies:** Navigate to the backend directory and install its dependencies:

   ```bash
   cd backend-server-store  # Replace with your backend directory name
   npm install  # or yarn install
   ```

**Running the Application**

**Frontend:**

1. **Development Server:** Start the development server to work on the website locally:

   ```bash
   npm run dev  # or yarn dev
   ```

   This will typically open your default browser at http://localhost:3000 (the port may vary).

**Backend:**

1. **Start Backend Server:** In the backend directory, run the server:

   ```bash
   npm start  # or yarn start
   ```

   **Note:** The default port for the backend server may vary. Check your backend code or configuration for the specific port.

**Production Build and Deployment**

Refer to the Next.js documentation for deployment instructions specific to your hosting provider: [https://nextjs.org/docs](https://nextjs.org/docs). Configure the frontend to communicate with the deployed backend API endpoint.

**Contributing**

[If you intend to accept contributions, outline your contribution guidelines here.]

**License**

[Specify the license under which your code is distributed.]

**Additional Notes**

- This project uses Next.js for a server-rendered React application.
- The backend uses Node.js with Express and SQLite for data storage.
- For more information on Next.js, refer to their official documentation.
