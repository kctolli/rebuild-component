# Rebuild Component 

Reusable component that helps rebuild/redeploy an app in services like netlify. 

Usage
```
import ReBuild from '@kctolli/rebuild-component';

const MyComponent = () => {
    const buildUrl = "";
    const statusUrl = "";
    
    return (
        <>
            {/* ReBuild function takes buildUrl and statusUrl as parameters */}
            <Rebuild buildUrl={buildUrl} statusUrl={statusUrl} >
        </>
    );
}

export default MyComponent;
```

Licensed under GPL 3

