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
  StateHook,
  Navbar,
} from '../components/index'

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Let's learn React Hook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full w-full bg-orange-400">
        <Navbar />
        <div className="h-full w-full p-2">
          <StateHook />
          <CallbackHook />
          <ContextApiHook />
          <EffectsHook />
          <ImperativeHandlingHook />
          <LayoutHook />
          <MemoryHook />
          <ReducerHook />
          <ReferenceHook />
          <DebugValueOrCustomHook />
        </div>
      </main>
    </div>
  )
}

export default Home
