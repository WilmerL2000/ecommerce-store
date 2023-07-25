import { cn } from '@/lib/utils';

export default function skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-neutral-200', className)}
      {...props}
    />
  );
}
