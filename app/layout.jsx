import "primereact/resources/primereact.min.css";
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primeicons/primeicons.css';

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