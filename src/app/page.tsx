import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Page 1</h1>
      <p><Link href="/subpage">Go to page 2</Link></p>
    </main>
  )
}
