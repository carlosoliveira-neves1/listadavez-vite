import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu.jsx'
import {
  Menu,
  Settings,
  Users,
  BarChart3,
  MoreVertical,
  Clock,
  UserCheck,
  UserX
} from 'lucide-react'
import AdminLogin from './components/AdminLogin.jsx'
import AdminPanel from './components/AdminPanel.jsx'
import './App.css'

// Dados de exemplo dos vendedores
const initialVendedores = [
  // ... seus dados aqui ...
]

function VendedorCard({ vendedor, index, onStatusChange }) {
  const getInitials = (nome) => nome.split(' ').map(n => n[0]).join('').toUpperCase()
  const formatTempo = (tempoInicio) => {
    if (!tempoInicio) return null
    const agora = new Date(); const diff = agora - tempoInicio
    const horas = Math.floor(diff / (1000 * 60 * 60))
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${horas.toString().padStart(2,'0')}:${minutos.toString().padStart(2,'0')}`
  }

  return (
    <Draggable draggableId={vendedor.id} index={index}>
      {(provided, snapshot) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={`mb-3 group cursor-pointer hover:shadow-md transition-all duration-200 ${snapshot.isDragging ? 'opacity-75' : ''}`}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      {vendedor.foto
                        ? <AvatarImage src={vendedor.foto} alt={vendedor.nome} />
                        : <AvatarFallback>{getInitials(vendedor.nome)}</AvatarFallback>}
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-gray-900">{vendedor.nome}</h3>
                      <p className="text-sm text-gray-500">{vendedor.empresa}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Badge variant={
                      vendedor.status === 'espera' ? 'secondary' :
                      vendedor.status === 'servico' ? 'destructive' :
                      'outline'} className="text-xs"
                    >
                      {vendedor.status === 'espera' ? 'Em espera' :
                       vendedor.status === 'servico' ? 'Em serviço' :
                       'Fora da loja'}
                    </Badge>
                    {vendedor.status === 'servico' && vendedor.tempoServico && (
                      <span className="ml-2 text-xs text-gray-600">
                        {formatTempo(vendedor.tempoServico)}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onStatusChange(vendedor.id, 'espera')}>
              <Clock className="w-4 h-4 mr-2" /> Em espera
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onStatusChange(vendedor.id, 'servico')}>
              <UserCheck className="w-4 h-4 mr-2" /> Em serviço
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onStatusChange(vendedor.id, 'fora')}>
              <UserX className="w-4 h-4 mr-2" /> Fora da loja
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </Draggable>
  )
}

export default function App() {
  const [vendedores, setVendedores] = useState(initialVendedores)
  const onStatusChange = (id, novoStatus) => {
    setVendedores(v =>
      v.map(x => x.id === id ? { ...x, status: novoStatus, tempoServico: novoStatus === 'servico' ? new Date() : null } : x)
    )
  }

  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="vendedores">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {vendedores.map((ven, idx) => (
              <VendedorCard key={ven.id} vendedor={ven} index={idx} onStatusChange={onStatusChange} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
