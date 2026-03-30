import './globals.css'

export const metadata = {
  title: 'Ahmet Taylan | Kreatif Portfolyo',
  description: "Ahmet Taylan'ın kişisel portfolyo ve özgeçmiş web sitesi. Modern teknolojilerle yenilikçi web ve masaüstü çözümleri.",
  keywords: ['Ahmet Taylan', 'portfolio', 'yazılım geliştirici', 'web developer'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
