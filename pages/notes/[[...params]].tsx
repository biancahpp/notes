import { useRouter } from "next/router"

export default function NotesId() {
    const router = useRouter();
    const { params } = router.query;
    
    return (
      <div>
        <h1>Hello Notes { params && params[0] }</h1>
        <h2>Description</h2>
      </div>
    )
  }
  