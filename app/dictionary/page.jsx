import Dashboard from "@/components/Dashboard"
import WordsPagination from "@/components/WordsPagination"
import WordsTable from "@/components/WordsTable"


const DictionaryPage = () => {
  return (
    <div className="w-full min-h-screen p-4">
      <Dashboard />
      <WordsTable />
      <WordsPagination />
    </div>

  )
}

export default DictionaryPage