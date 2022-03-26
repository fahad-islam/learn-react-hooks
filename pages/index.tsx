import type { NextPage } from 'next'
import Head from 'next/head'
import {
  CallbackHook,
  ContextApiHook,
  DebugValueOrCustomHook,
  EffectsHook,
  ImperativeHandlingHook,
  LayoutHook,
  MemoryHook,
  ReducerHook,
  ReferenceHook,
} from '../components/index'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Let's learn React Hook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center gap-5">
        <span className="font-sans text-4xl">
          Let's Learn
          <span className="ml-2 bg-gradient-to-br text-6xl font-black from-blue-800 via-red-400 to-blue-700 bg-clip-text text-transparent">
            React Hook
          </span>
        </span>
        <CallbackHook />
        <ContextApiHook />
        <DebugValueOrCustomHook />
        <EffectsHook />
        <ImperativeHandlingHook />
        <LayoutHook />
        <MemoryHook />
        <ReducerHook />
        <ReferenceHook />
      </main>
    </div>
  )
}

export default Home
