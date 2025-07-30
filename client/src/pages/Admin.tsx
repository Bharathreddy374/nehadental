import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Patient, Appointment } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  Activity, 
  Plus, 
  Search,
  Filter,
  MoreHorizontal,
  Phone,
  Mail,
  MapPin,
  Clock,
  Edit,
  Trash2,
  Eye,
  CheckCircle
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddPatientForm from "@/components/AddPatientForm";
import AddAppointmentForm from "@/components/AddAppointmentForm";
import PicktimeSetup from "@/components/PicktimeSetup";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [showAddAppointment, setShowAddAppointment] = useState(false);

  // Mock data for demonstration (will connect to real backend when database is ready)
  const mockPatients: Patient[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+91 9876543210",
      dateOfBirth: new Date("1990-05-15"),
      address: "123 Main St, Mumbai",
      medicalHistory: "No known allergies",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "+91 8765432109",
      dateOfBirth: new Date("1985-10-22"),
      address: "456 Oak Ave, Delhi",
      medicalHistory: "Allergic to penicillin",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  const mockAppointments: Appointment[] = [
    {
      id: 1,
      patientId: 1,
      appointmentDate: new Date(),
      appointmentTime: "10:00",
      service: "Consultation",
      status: "scheduled",
      notes: "Regular checkup",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      patientId: 2,
      appointmentDate: new Date(Date.now() + 86400000), // Tomorrow
      appointmentTime: "14:30",
      service: "Cleaning",
      status: "scheduled",
      notes: "Annual cleaning",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  // Fetch data from API (fallback to mock data when database is not ready)
  const { data: fetchedPatients, isLoading: patientsLoading } = useQuery<Patient[]>({
    queryKey: ["/api/patients"],
    retry: false,
  });

  const { data: fetchedAppointments, isLoading: appointmentsLoading } = useQuery<Appointment[]>({
    queryKey: ["/api/appointments"],
    retry: false,
  });

  // Use real data if available, otherwise use mock data
  const patients = fetchedPatients || mockPatients;
  const appointments = fetchedAppointments || mockAppointments;

  // Dashboard stats
  const totalPatients = patients.length;
  const todayAppointments = appointments.filter(apt => {
    const today = new Date().toISOString().split('T')[0];
    return apt.appointmentDate && new Date(apt.appointmentDate).toISOString().split('T')[0] === today;
  }).length;
  const pendingAppointments = appointments.filter(apt => apt.status === 'scheduled').length;

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateString; // Return original if parsing fails
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your dental practice efficiently</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="treatments">Treatments</TabsTrigger>
            <TabsTrigger value="booking">Booking Setup</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Patients</p>
                      <p className="text-3xl font-bold text-gray-900">{totalPatients}</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
                      <p className="text-3xl font-bold text-gray-900">{todayAppointments}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending Appointments</p>
                      <p className="text-3xl font-bold text-gray-900">{pendingAppointments}</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Activity className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                {appointmentsLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading appointments...</p>
                  </div>
                ) : appointments.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">No appointments yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {appointments.slice(0, 5).map((appointment: any) => (
                      <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Calendar className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Patient ID: {appointment.patientId}</p>
                            <p className="text-sm text-gray-600">{appointment.service}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{formatDate(appointment.appointmentDate)}</p>
                          <Badge className={`text-xs ${getStatusColor(appointment.status)}`}>
                            {appointment.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search patients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              <Dialog open={showAddPatient} onOpenChange={setShowAddPatient}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Patient
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <AddPatientForm 
                    onClose={() => setShowAddPatient(false)}
                    onSuccess={() => setShowAddPatient(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                {patientsLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading patients...</p>
                  </div>
                ) : patients.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">No patients registered yet</p>
                    <Dialog open={showAddPatient} onOpenChange={setShowAddPatient}>
                      <DialogTrigger asChild>
                        <Button className="mt-4">
                          <Plus className="h-4 w-4 mr-2" />
                          Add First Patient
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <AddPatientForm 
                          onClose={() => setShowAddPatient(false)}
                          onSuccess={() => setShowAddPatient(false)}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Last Visit</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {patients
                        .filter((patient: any) =>
                          patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          patient.email.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((patient: any) => (
                          <TableRow key={patient.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">{patient.name}</p>
                                <p className="text-sm text-gray-600">ID: {patient.id}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center text-sm">
                                  <Phone className="h-3 w-3 mr-1" />
                                  {patient.phone}
                                </div>
                                <div className="flex items-center text-sm">
                                  <Mail className="h-3 w-3 mr-1" />
                                  {patient.email}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <p className="text-sm">{formatDate(patient.createdAt)}</p>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-green-100 text-green-800">Active</Badge>
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem>
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search appointments..."
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              <Dialog open={showAddAppointment} onOpenChange={setShowAddAppointment}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Appointment
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <AddAppointmentForm 
                    onClose={() => setShowAddAppointment(false)}
                    onSuccess={() => setShowAddAppointment(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                {appointmentsLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading appointments...</p>
                  </div>
                ) : appointments.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">No appointments scheduled</p>
                    <Dialog open={showAddAppointment} onOpenChange={setShowAddAppointment}>
                      <DialogTrigger asChild>
                        <Button className="mt-4">
                          <Plus className="h-4 w-4 mr-2" />
                          Schedule First Appointment
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <AddAppointmentForm 
                          onClose={() => setShowAddAppointment(false)}
                          onSuccess={() => setShowAddAppointment(false)}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Patient</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointments.map((appointment: any) => (
                        <TableRow key={appointment.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">Patient ID: {appointment.patientId}</p>
                              <p className="text-sm text-gray-600">Appointment #{appointment.id}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <p className="font-medium">{appointment.service}</p>
                            {appointment.notes && (
                              <p className="text-sm text-gray-600">{appointment.notes}</p>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center text-sm">
                                <Calendar className="h-3 w-3 mr-1" />
                                {formatDate(appointment.appointmentDate)}
                              </div>
                              <div className="flex items-center text-sm">
                                <Clock className="h-3 w-3 mr-1" />
                                {appointment.appointmentTime}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`${getStatusColor(appointment.status)}`}>
                              {appointment.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Mark Complete
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Cancel
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Treatments Tab */}
          <TabsContent value="treatments" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Treatment Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Treatment
              </Button>
            </div>

            <Card>
              <CardContent className="p-8 text-center">
                <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Treatment Management</h3>
                <p className="text-gray-600 mb-4">
                  Manage patient treatments, track progress, and maintain treatment records.
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Treatment Plan
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Booking Setup Tab */}
          <TabsContent value="booking">
            <PicktimeSetup />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;