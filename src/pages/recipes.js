import React from 'react'
import AllRecipes from '../components/all-recipes'
import Layout from '../components/layout'

const recipesPage = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default recipesPage
