import SidebarMenuItem from "../atoms/SidebarMenuItem";

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  href?: string;
  isActive?: boolean;
  danger?: boolean;
  onClick?: () => void;
}

interface SidebarSectionProps {
  title: string;
  items: SidebarItem[];
}

export default function SidebarSection({ title, items }: SidebarSectionProps) {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="px-4 text-sm font-medium text-gray-500">{title}</h3>

      <div className="flex flex-col gap-1">
        {items.map(item => (
          <SidebarMenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
            active={item.isActive}
            danger={item.danger}
            onClick={item.onClick}
          />
        ))}
      </div>
    </section>
  );
}
