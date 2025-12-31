
const ErrorMessage = ({children}:{children:React.ReactNode}) => {
  return (
    <p className="bg-red-50 py-2 px-4 text-red-700 rounded text-sm font-semibold">{children}</p>
  )
}

export default ErrorMessage