import ReactHotToast from "../(authHome)/ReactHotToast"
import ReactQueryProvider from "../(authHome)/ReactQueryProvider"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <ReactQueryProvider>
      <ReactHotToast/>
        {children}
      </ReactQueryProvider>
        
        </body>
    </html>
  )
}
