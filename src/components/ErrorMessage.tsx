    
type ErrorMessageProps = {
    children: React.ReactNode
}
export default function ErrorMessage({children}:ErrorMessageProps) {
  return (
    <p className="text-sm text-red-700 font-medium rounded  bg-red-50 px-4 py-2" >{children}</p>
  )
}
