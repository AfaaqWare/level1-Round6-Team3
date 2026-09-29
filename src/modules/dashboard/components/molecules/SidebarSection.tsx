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
  collapsed?: boolean;
}

export default function SidebarSection({ title, items, collapsed = false }: SidebarSectionProps) {
  return (
    <section className={collapsed ? "flex flex-col items-center gap-2" : "flex flex-col gap-2"}>
      {!collapsed && <h3 className="px-4 text-sm font-medium text-gray-500">{title}</h3>}

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
            collapsed={collapsed}
          />
        ))}
      </div>
    </section>
  );
}
