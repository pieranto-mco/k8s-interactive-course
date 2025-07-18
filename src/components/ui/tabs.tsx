import React, { useState } from "react";

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

interface TabsListProps {
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface TabsContentProps {
  value: string;
  activeTab: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, className, children }: TabsProps) {
  const [active, setActive] = useState(defaultValue);
  // children expected: TabsList + TabsContent(s)
  // We'll clone TabsList to pass setActive and active

  const tabsList = React.Children.toArray(children).find(
    (c: any) => c.type.displayName === "TabsList"
  );
  const tabsContents = React.Children.toArray(children).filter(
    (c: any) => c.type.displayName === "TabsContent"
  );

  return (
    <div className={className}>
      {tabsList &&
        React.cloneElement(tabsList as React.ReactElement<any>, {
          active,
          setActive,
        })}
      {tabsContents.map((content: any) =>
        React.cloneElement(content, { activeTab: active })
      )}
    </div>
  );
}

export function TabsList({
  children,
  active,
  setActive,
}: TabsListProps & {
  active?: string;
  setActive?: (val: string) => void;
}) {
  return (
    <div className="flex border-b mb-4">
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          isActive: child.props.value === active,
          onClick: () => setActive && setActive(child.props.value),
        });
      })}
    </div>
  );
}
TabsList.displayName = "TabsList";

export function TabsTrigger({
  value,
  children,
  isActive,
  onClick,
}: TabsTriggerProps & { isActive?: boolean }) {
  return (
    <button
      className={`px-4 py-2 -mb-px border-b-2 ${
        isActive ? "border-blue-500 font-bold" : "border-transparent"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
TabsTrigger.displayName = "TabsTrigger";

export function TabsContent({
  value,
  activeTab,
  children,
}: TabsContentProps) {
  if (value !== activeTab) return null;
  return <div>{children}</div>;
}
TabsContent.displayName = "TabsContent";
