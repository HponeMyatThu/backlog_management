export default async function Page({
  params,
}: {
  params: Promise<{ taskId: string; projectId: string }>;
}) {
  const taskId = (await params).taskId;
  const projectId = (await params).projectId;
  return (
    <div>
      My task: {taskId}, project: {projectId}
    </div>
  );
}
