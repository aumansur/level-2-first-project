export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNumber: string
  motherName: string
  motherOccupation: string
  motherContactNumber: string
}

export type localGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}
export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth?: string
  email: string
  contactNumber: string
  emergencyContactNumber: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGuardian: localGuardian
  profileImage?: string
  isActive: 'active' | 'inActive'
}
