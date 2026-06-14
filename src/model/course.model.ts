export type CourseStatus = "approved" | "pending" | "rejected";

export type CourseUser = {
  userId: number;
  fullName: string;
  email: string;
  avatar: string;
  createdAt: string;
  isMailVerified: boolean;
  emailVerificationToken: string | null;
  emailVerificationTokenExpires: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};
export type Course = {
    courseId: number;
    user: CourseUser;
    title: string;
    status: CourseStatus;
    description: string;
    thumbnailUrl: string;
    projectUrl: string;
    language: string;
    duration: number;
    totalLessons: number;
    createdAt: string;
    updatedAt: string | null;
    enrollmentCount: number;
};