import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import '@styles/global.css';

const RootLayout = ({children}) => {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    )
}

export default RootLayout;