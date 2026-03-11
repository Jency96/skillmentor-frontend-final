export interface Subject {
  id: number;
  subjectName: string;
  description?: string;
  courseImageUrl?: string;
  mentorId?: number;
}

export interface MentorSubject {
  id: number;
  subjectName: string;
  courseImageUrl?: string;
}

export interface Mentor {
  id: number;
  mentorId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  title?: string;
  profession?: string;
  company?: string;
  experienceYears?: number;
  bio?: string;
  profileImageUrl?: string;
  isCertified: boolean;
  startYear?: number;
  positiveReviews: number;
  totalEnrollments: number;
  subjects: MentorSubject[];
}

export interface Enrollment {
  id: number;
  subjectName: string;
  mentorName: string;
  mentorProfileImageUrl?: string;
  paymentStatus: "pending" | "accepted" | "completed" | "cancelled" | "confirmed";
  sessionStatus?: "pending" | "confirmed" | "completed" | "cancelled";
  studentName?: string;
  durationMinutes?: number;
  sessionAt: string;
  meetingLink?: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size?: number;
  number?: number;
}