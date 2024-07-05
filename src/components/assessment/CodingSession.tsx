import Sidebar from './Sidebar';
import { Card, CardContent, CardHeader } from '../ui/card';
import { TbFileDescription } from 'react-icons/tb';
import Header from './Header';
import CodingPanel from './CodingPanel';
import { PlainPlate } from '../common';

const mock =
    '[{"type":"p","align":"start","children":[{"text":"In a gold mine "},{"text":"grid","fontSize":"0.75rem","backgroundColor":"rgba(0, 10, 32, 0.03)","color":"rgba(38, 38, 38, 0.75)","code":true},{"text":"of size "},{"text":"m x n","fontSize":"0.75rem","backgroundColor":"rgba(0, 10, 32, 0.03)","color":"rgba(38, 38, 38, 0.75)","code":true},{"text":", each cell in this mine has an integer representing the amount of gold in that cell, "},{"text":"0","fontSize":"0.75rem","backgroundColor":"rgba(0, 10, 32, 0.03)","color":"rgba(38, 38, 38, 0.75)","code":true},{"text":"if it is empty."}],"id":"behvk"},{"type":"p","align":"start","children":[{"text":"Return the maximum amount of gold you can collect under the conditions:"}],"id":"t6ahv"},{"type":"p","listStyleType":"disc","indent":1,"children":[{"text":"Every time you are located in a cell you will collect all the gold in that cell"}],"id":"bquus"},{"type":"p","listStyleType":"disc","indent":1,"children":[{"text":"From your position"}],"listStart":2,"id":"wcj0z"},{"type":"p","align":"start","children":[{"text":""}],"id":"vee8r"},{"type":"p","align":"start","children":[{"text":"Example 1:","bold":true}],"id":"z3akp"},{"type":"code_block","children":[{"type":"code_line","children":[{"text":"Input: grid = [[0,6,0],[5,8,7],[0,9,0]]"}],"id":"88w7k"},{"type":"code_line","children":[{"text":"Output: 24"}],"id":"hgpwy"},{"type":"code_line","children":[{"text":"Explanation:"}],"id":"l4j9u"},{"type":"code_line","children":[{"text":"[[0,6,0],"}],"id":"6g1vr"},{"type":"code_line","children":[{"text":" [5,8,7],"}],"id":"gny94"},{"type":"code_line","children":[{"text":" [0,9,0]]"}],"id":"crkdk"},{"type":"code_line","children":[{"text":"Path to get the maximum gold, 9 -> 8 -> 7."}],"id":"37syx"}],"id":"yfk5u"},{"type":"p","align":"start","children":[{"text":"Example 2:","bold":true}],"id":"amz1l"},{"type":"code_block","children":[{"type":"code_line","children":[{"text":"Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]"}],"id":"4c1fr"},{"type":"code_line","children":[{"text":"Output: 28"}],"id":"v3lyy"},{"type":"code_line","children":[{"text":"Explanation:"}],"id":"ipbgv"},{"type":"code_line","children":[{"text":"[[1,0,7],"}],"id":"jxs4r"},{"type":"code_line","children":[{"text":" [2,0,6],"}],"id":"xe0os"},{"type":"code_line","children":[{"text":" [3,4,5],"}],"id":"3uejl"},{"type":"code_line","children":[{"text":" [0,3,0],"}],"id":"v7ivi"},{"type":"code_line","children":[{"text":" [9,0,20]]"}],"id":"ac3bl"},{"type":"code_line","children":[{"text":"Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7."}],"id":"t55c8"}],"id":"7vevy"},{"type":"p","align":"start","children":[{"text":""}],"id":"ie1zy"},{"type":"p","align":"start","children":[{"text":"Constraints:","bold":true}],"id":"pn5fz"},{"type":"p","listStyleType":"","indent":0,"children":[{"text":"m == grid.length","fontSize":"14px","backgroundColor":"rgb(240, 240, 240)","color":"rgb(38, 38, 38)","code":true}],"id":"znm0u"},{"type":"p","listStyleType":"","indent":0,"children":[{"text":"n == grid[i].length","fontSize":"14px","backgroundColor":"rgb(240, 240, 240)","color":"rgb(38, 38, 38)","code":true}],"id":"i0q47"},{"type":"p","listStyleType":"","indent":0,"children":[{"text":"1 &lt;= m, n &lt;= 15","fontSize":"14px","backgroundColor":"rgb(240, 240, 240)","color":"rgb(38, 38, 38)","code":true}],"id":"r4bb1"},{"type":"p","listStyleType":"","indent":0,"children":[{"text":"0 &lt;= grid[i][j] &lt;= 100","fontSize":"14px","backgroundColor":"rgb(240, 240, 240)","color":"rgb(38, 38, 38)","code":true}],"id":"zkstx"},{"type":"p","listStyleType":"","indent":0,"children":[{"text":"There are at most ","fontSize":"14px","backgroundColor":"rgb(240, 240, 240)","color":"rgb(38, 38, 38)"},{"text":"25 ","bold":true,"fontSize":"14px","backgroundColor":"rgb(240, 240, 240)","color":"rgb(38, 38, 38)"},{"text":"cells containing gold.","fontSize":"14px","backgroundColor":"rgb(240, 240, 240)","color":"rgb(38, 38, 38)"}],"id":"h9bhg"}]';

const CodingSession = () => {
    return (
        <div className="flex h-screen flex-col overflow-hidden bg-[#20221E] text-sm text-[#eee]">
            <Header />
            <Sidebar />
            <div className="ml-16 flex min-h-0 flex-1 gap-2">
                <Card className="mb-2 flex-1 border-[#606060] bg-[#262626]">
                    <CardHeader className="rounded-t-xl bg-[#333] px-4 pb-2 pt-2 font-medium text-white">
                        <div className="flex items-center gap-2">
                            <TbFileDescription /> Description
                        </div>
                    </CardHeader>
                    <CardContent className="h-[calc(100vh-100px)] overflow-y-auto py-4 text-black invert">
                        <PlainPlate data={JSON.parse(mock)} />
                    </CardContent>
                </Card>
                <CodingPanel />
            </div>
        </div>
    );
};

export default CodingSession;
