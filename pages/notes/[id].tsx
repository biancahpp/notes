/** @jsxImportSource theme-ui */
import { useRouter } from "next/router"

export default function NotesId() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {id} </h1>
    </div>
  )
}
  