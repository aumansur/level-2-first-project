import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  // send response
  try {
    const { student: studentData } = req.body

    const result = await StudentServices.createStudentIntoDB(studentData)
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentsFromDB(studentId)
    res.status(200).json({
      success: true,
      message: 'Students is retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
