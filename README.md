# User management

## Overview

-  **Run the finished app**

    1. Install every dependencies:

        ```shell
        yarn install
        ```
   
    2. Then run the app.
        ```shell
        yarn open
        ```
       
-   **OR just simply open the generated base file in any host**
 
     1. You can find it here:
    
        ```shell
        public/index.html
        ```
        
## Package commands overview

- `yarn open`: Cleans the whole cache directory, builds the application and starts a localhost to serve it
- `yarn build`: Build the production web application package.
- `yarn develop`: Run the live-refreshing development host.
- `yarn storybook`: Run storybook to test components.

## Testing  
-  **Storybook.js**

    To run [Storybook](https://storybook.js.org), you can run `yarn storybook` and see the base component stories at `http://localhost:6006`.
    
    The unit tests can be found inside the directory of each components. 
    
    Name syntax: `{componentName}.stories.tsx`
