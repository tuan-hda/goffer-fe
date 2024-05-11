const MemberList = () => {
    return (
        <div className="mt-4 flex h-2 gap-10">
            <div className="min-w-0 max-w-[300px] flex-1">
                <p className="font-semibold">Team members</p>
                <p className="mt-1 text-gray-500">
                    Manage your existing team, change roles/permissions, or add new team members.
                </p>
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-center rounded-md border border-dashed p-20">
                    <p>Team members</p>
                </div>
            </div>
        </div>
    );
};

export default MemberList;
