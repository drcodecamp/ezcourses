import React, { ReactNode, useEffect, useRef, useState } from 'react'

interface MenuItem {
  label: string
  onClick: () => void
}

interface DropdownMenuProps {
  buttonComponent: ReactNode
  menuItems: MenuItem[]
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  buttonComponent,
  menuItems,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  })
  const buttonRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLUListElement>(null)

  const handleButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      })
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <div className="dropdown-container">
      <div ref={buttonRef} onClick={handleButtonClick}>
        {buttonComponent}
      </div>
      {isOpen && (
        <ul
          ref={dropdownRef}
          className="dropdown-menu"
          style={{ top: position.top, left: position.left }}
        >
          {menuItems.map((item, index) => (
            <li key={index} onClick={item.onClick}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownMenu
