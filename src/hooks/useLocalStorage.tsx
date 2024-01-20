import { useState } from 'react'

const useLocalStorage = (key: string, initialArray: any) => {
  // Obtener el valor almacenado en localStorage al inicio
  const storedValue = localStorage.getItem(key)
  // Inicializar el estado con el valor almacenado o con el valor inicial proporcionado
  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialArray || []
  )

  // Función para actualizar el estado y almacenar el nuevo valor en localStorage
  const updateValue = (newValue: any) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, updateValue]
}

export default useLocalStorage
